using Microsoft.aspNetCore.Mvc;
using system;
[APIController]
[Route(api)]
public class APIController : ControllerBase{
    [HttpGet("hello")]
    public IActionResult Hello(){
        return OK(new{message = "Hello,World"});
    }
}