using Microsoft.EntityFrameworkCore;

namespace Legalex.Models
{
    public class LegalexContext : DbContext
    {
        public DbSet<Order> Orders { get; set; }
        public DbSet<ServiceRequest> ServiceRequests { get; set; }

        public LegalexContext(DbContextOptions<LegalexContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }
    }
}
