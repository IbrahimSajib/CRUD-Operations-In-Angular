using System.ComponentModel.DataAnnotations;

namespace API_CRUD.BL.Models
{
    public class Student
    {
        public int StudentId { get; set; }
        [Required]
        public string? Name { get; set; }
        [Required]
        public int? Age { get; set; }
    }
}
