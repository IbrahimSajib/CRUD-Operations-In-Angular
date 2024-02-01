using System.ComponentModel.DataAnnotations;

namespace API_CRUD.BL.DTO
{
    public class StudentDTO
    {
        [Required]
        public string? Name { get; set; }
        [Required]
        public int? Age { get; set; }
    }
}