using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace Ligalex.Middleware
{
    public class ErrorMiddleware
    {
        private readonly RequestDelegate _next;

        public ErrorMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            var path = context.Request.Path;
            if (context.Response.StatusCode == 404)
            {
                context.Request.Path = "/index.html";
            }
            
            await _next.Invoke(context);
        }
    }
}
