using AngularApp1.Server.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authorization.Policy;
using Microsoft.AspNetCore.Http;

namespace AngularApp1.Server.Models;

/// <summary>
/// § 擴增 [AuthorizeAttribute] 檢查項目。如以 JwtBearer 證認時檢查是否已因執行登出而不在白名單中了。
/// 預設 JwtBearer 只會驗算 Token 是否有效，但不會檢查是否已登出。
/// ※ 加入 DI 註冊時需用 Singleton 模式。
/// ref → [自訂 AuthorizationMiddleware 的行為。](https://learn.microsoft.com/zh-tw/aspnet/core/security/authorization/customizingauthorizationmiddlewareresponse?view=aspnetcore-8.0)
/// </summary>
public class CustomAuthorizationMiddleware(
  AccountService _accountSvc
  ) : IAuthorizationMiddlewareResultHandler
{
  private readonly AuthorizationMiddlewareResultHandler defaultHandler = new();

  public async Task HandleAsync(
      RequestDelegate next,
      HttpContext context,
      AuthorizationPolicy policy,
      PolicyAuthorizationResult authorizeResult)
  {
    // 檢查是不是已登出而不在登入名單中了
    var jwtToken = context.Request.Headers["Authorization"];
    bool IsAuthenticated = context.User.Identity?.IsAuthenticated ?? false;
    if (IsAuthenticated && !String.IsNullOrEmpty(jwtToken))
    {
      var auth = _accountSvc.GetSessionUser(context.User.Identity);
      if(auth is null)
      {
        // 401 
        context.Response.StatusCode = StatusCodes.Status401Unauthorized;
        return;
      }
    }

    // Fall back to the default implementation.
    await defaultHandler.HandleAsync(next, context, policy, authorizeResult);
  }
}
