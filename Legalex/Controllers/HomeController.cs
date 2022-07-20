using Microsoft.AspNetCore.Mvc;

namespace Legalex.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
