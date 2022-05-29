using Microsoft.AspNetCore.Builder;

namespace Ligalex.Middleware.Extension
{
    public static class ErrorExtension
    {
        public static IApplicationBuilder UseErrorHandler(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<ErrorMiddleware>();
        }
    }
}
