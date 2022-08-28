namespace Cards.API.Models
{
    public class Card
    {
        [Key]
        public Guid id { get; set; }

        public string CardholderName { get; set; }
        public string CardNumber { get; set; }
        public string ExpiryMonth { get; set; }
        public string CVC { get; set; }

    }
}
