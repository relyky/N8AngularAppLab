using AngularApp1.Server.Models;
using AngularApp1.Server.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using N8ReactAppTpl.Server.Models;

var builder = WebApplication.CreateBuilder(args);
var _config = builder.Configuration;

//## for Authentication & Authorization

// for Antiforgery
builder.Services.AddAntiforgery(options =>
{
  options.HeaderName = "X-CSRF-TOKEN"; // 預設: "RequestVerificationToken"
  options.FormFieldName = "__RequestVerificationToken";
  //options.Cookie.Name = "X-CSRF-TOKEN"; // 預設為亂數
  options.Cookie.HttpOnly = true;
  options.Cookie.SecurePolicy = CookieSecurePolicy.SameAsRequest;
  options.Cookie.MaxAge = null;
  options.SuppressXFrameOptionsHeader = false;
});

// for JwtBearer Auth
var jwtTokenValidationParameters = JwtAuthenticationTool.GenerateTokenValidationParameters(_config);

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
  .AddJwtBearer(option =>
  {
#if DEBUG
    option.RequireHttpsMetadata = false;
#endif
    option.SaveToken = true;
    option.TokenValidationParameters = jwtTokenValidationParameters;
  });

// To customize JwtBearer checking
builder.Services.AddSingleton<IAuthorizationMiddlewareResultHandler, CustomAuthorizationMiddleware>();

builder.Services.AddSingleton(jwtTokenValidationParameters);

// Add services to the container. --------------------------------------------------

//※ 用 AddControllersWithViews 才支援 AntiForgery 機制。
builder.Services.AddControllersWithViews();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddMemoryCache();
builder.Services.AddHttpContextAccessor();
builder.Services.AddSingleton<AccountService>();

var app = builder.Build(); //--------------------------------------------------

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseHttpsRedirection();

//## for Authentication & Authorization
app.UseAuthentication();
app.UseAuthorization();

//## Endpoints
app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
