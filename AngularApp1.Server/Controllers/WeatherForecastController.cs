using AngularApp1.Server.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace AngularApp1.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class WeatherForecastController(
  ILogger<WeatherForecastController> _logger
  ) : ControllerBase
{
  private static readonly string[] Summaries = new[]
  {
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
  };

  [HttpGet("[Action]")]
  public async Task<List<WeatherForecast>> QryDataList()
  {
    await Task.Delay(1000);

    if(DateTime.Now.Second % 3 == 0)
    {
      _logger.LogError("這是測試邏輯錯誤訊息！");
      throw new BadHttpRequestException("這是測試邏輯錯誤訊息！");
    }

    var dataList = Enumerable.Range(1, 5).Select(index => new WeatherForecast
    {
      Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
      TemperatureC = Random.Shared.Next(-20, 55),
      Summary = Summaries[Random.Shared.Next(Summaries.Length)]
    }).ToList();

    _logger.LogInformation("QryWeatherForecast");
    return dataList;
  }
}
