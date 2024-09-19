using Microsoft.AspNetCore.Mvc;
using System.Text.Json.Serialization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularApp1.Server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TodoController : ControllerBase
{
  protected static List<Todo> simsDataRepo = new List<Todo>
  {
    new Todo { Sn = 1, Description = "Learn Html5", Done = true },
    new Todo { Sn = 2, Description = "Learn CSS3", Done = true },
    new Todo { Sn = 3, Description = "Learn Angular", Done = false },
    new Todo { Sn = 4, Description = "Learn .NET Core", Done = false },
    new Todo { Sn = 5, Description = "Learn Azure", Done = false },
    new Todo { Sn = 6, Description = "Learn SQL Server", Done = false },
    new Todo { Sn = 7, Description = "Learn Docker", Done = false },
  };

  // GET: api/<TodoController>
  [HttpGet]
  public async Task<IEnumerable<Todo>> Get()
  {
    await Task.Delay(800);
    return simsDataRepo.OrderByDescending(c => c.Sn);
  }

  // GET api/<TodoController>/5
  [HttpGet("{id}")]
  public async Task<Todo?> Get(int id)
  {
    await Task.Delay(800);
    return simsDataRepo.Find(c => c.Sn == id);
  }

  // POST api/<TodoController>
  [HttpPost]
  public async Task<Todo> Post(PostArgs args)
  {
    await Task.Delay(800);
    var newTodo = new Todo { Sn = simsDataRepo.Max(c => c.Sn) + 1, Description = args.Description, Done = false };
    simsDataRepo.Add(newTodo);
    return newTodo;
  }

  public record PostArgs
  {
    public string Description { get; set; } = string.Empty;
  }

  // PUT api/<TodoController>/5
  [HttpPut]
  public async Task<Todo> Put([FromBody] Todo newInfo)
  {
    await Task.Delay(800);
    int index = simsDataRepo.FindIndex(c => c.Sn == newInfo.Sn);
    if (index < 0) throw new HttpRequestException("該 Todo 不存在！");
    simsDataRepo[index] = newInfo;
    return newInfo;
  }

  // DELETE api/<TodoController>/5
  [HttpDelete("{id}")]
  public async Task Delete(int id)
  {
    await Task.Delay(800);
    simsDataRepo.RemoveAt(simsDataRepo.FindIndex(c => c.Sn == id));
  }
}

public record Todo
{
  public int Sn { get; set; }
  public string Description { get; set; } = string.Empty;
  public Boolean Done { get; set; }
}