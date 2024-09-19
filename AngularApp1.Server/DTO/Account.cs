using System.ComponentModel.DataAnnotations;

namespace AngularApp1.Server.DTO;

public record LoginArgs
{
  [Required]
  [Display(Name = "帳號")]
  public string UserId { get; set; } = string.Empty;

  [Required]
  [Display(Name = "通關密語")]
  public string Credential { get; set; } = string.Empty;

  [Required]
  [Display(Name = "驗證碼")]
  public string Vcode { get; set; } = string.Empty;
}

public record LoginUserInfo
{
  public string LoginUserId { get; set; } = string.Empty;
  public string LoginUserName { get; set; } = string.Empty;
  //[TsProperty(Type = "Date")]
  public DateTimeOffset ExpiredTime { get; set; }
}

public record AccessTokenResult
{
  //[TsProperty(Type = "Date")]
  public DateTimeOffset ExpiredTime { get; set; }
  public string AuthToken { get; set; } = string.Empty;
}

