/// Description: 處理登入登出的控制器

using AngularApp1.Server.DTO;
using AngularApp1.Server.Services;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using N8ReactAppTpl.Server.Models;

namespace AngularApp1.Server.Controllers;

[AllowAnonymous]
[Route("api/[controller]")]
[ApiController]
public class AccountController(ILogger<AccountController> _logger, AccountService _account) : ControllerBase
{
  [HttpPost("[action]")]
  public async Task<ActionResult<AccessTokenResult>> Login(LoginArgs login)
  {
    try
    {
      // 模擬長時間運算。正式版移除。
      await Task.Delay(800);

      //# Clear the existing external cookie to ensure a clean login process
      //await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme); // JwtBearer 無效

      if (!_account.Authenticate(login))
        return Unauthorized();

      var auth = _account.Authorize(login.UserId);
      if (auth == null)
        return Unauthorized();

      var token = _account.GenerateJwtToken(auth);

      _logger.LogInformation($"RequestAccessToken[{auth.UserId}].");
      return Ok(new AccessTokenResult
      {
        ExpiredTime = token.expiresUtc.ToLocalTime(),
        AuthToken = token.JwtToken
      });
    }
    catch
    {
      return Unauthorized();
    }
  }

  /// <summary>
  /// 取得現在線上登入的使用者資訊
  /// </summary>
  [Authorize]
  [HttpPost("[action]")]
  public async Task<ActionResult<LoginUserInfo>> GetLoginUser()
  {
    // 模擬長時間運算。正式版移除。
    await Task.Delay(800);

    // 取現在登入授權資料
    AuthUser? auth = _account.GetSessionUser(HttpContext.User.Identity);
    if (auth == null)
      return Unauthorized();

    var result = new LoginUserInfo
    {
      LoginUserId = auth.UserId,
      LoginUserName = auth.UserName,
      ExpiredTime = auth.ExpiresUtc,
    };

    _logger.LogInformation($"取得登入者[{auth.UserId}]資訊。");
    return Ok(result);
  }

  /// <summary>
  /// 登出
  /// </summary>
  [Authorize]
  [HttpPost("[action]")]
  public ActionResult Logout()
  {
    // 登出
    _account.SignOut(HttpContext.User.Identity);

    // Clear the existing external cookie to ensure a clean login process
    //await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme); // JwtBearer 無效

    return Ok(new { message = "Logout done." });
  }
}
