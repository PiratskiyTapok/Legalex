using System;
using Legalex.Models.Structures;

namespace Legalex.Models
{
    public class Order
    {
        public int Id { get; set; }
        public OrderType Type { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
    }
}
