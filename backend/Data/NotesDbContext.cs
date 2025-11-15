using Microsoft.EntityFrameworkCore;
using NoteApp.Backend.Model;

namespace NoteApp.Backend.Data
{
    public class NotesDbContext : DbContext
    {
        public NotesDbContext(DbContextOptions<NotesDbContext> options) : base(options) { }
        public DbSet<Note> Notes { get; set; }
    }
}
