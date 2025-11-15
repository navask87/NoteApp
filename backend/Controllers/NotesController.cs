
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NoteApp.Backend.Data;
using NoteApp.Backend.Model;

namespace NoteApp.Backend.Controllers
{
    
    /// <summary>
    /// Notes controller
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class NotesController : ControllerBase
    {
        private readonly NotesDbContext _context;

        public NotesController(NotesDbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Action controller to get all notes
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> GetNotes()
        {
            var notes = await _context.Notes.OrderByDescending(n => n.Date).ToListAsync();
            return Ok(notes);
        }
        
        /// <summary>
        /// Action controller to create a note
        /// </summary>
        /// <param name="note"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> CreateNote(Note note)
        {
            _context.Notes.Add(note);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetNotes), new { id = note.Id }, note);
        }

        /// <summary>
        /// Action controller to update a note
        /// </summary>
        /// <param name="id"></param>
        /// <param name="note"></param>
        /// <returns></returns>
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateNote(string id, Note note)
        {
            if (id != note.Id) return BadRequest();

            _context.Entry(note).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        /// <summary>
        /// Action controller to delete a note
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNote(string id)
        {
            var note = await _context.Notes.FindAsync(id);
            if (note == null) return NotFound();

            _context.Notes.Remove(note);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
