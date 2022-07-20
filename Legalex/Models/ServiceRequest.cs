namespace Legalex.Models
{
    public class ServiceRequest
    {
        public int Id { get; set; }
        public string NameOfSender { get; set; }
        public int TelephoneNumber { get; set; }
        public string Email { get; set; }
        public string Title { get; set; }
        public string Message { get; set; }
    }
}
