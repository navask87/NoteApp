namespace NoteApp.Backend.Model
{
    public class Note
    {
        /// <summary>
        /// Represents unique id (primary key)
        /// </summary>
        /// <value></value>
        public string Id { get; set; }

        /// <summary>
        /// Represents the note content
        /// </summary>
        /// <value></value>
        public string Text { get; set; }

        /// <summary>
        /// Represents Note priority
        /// </summary>
        /// <value></value>
        public  string Priority { get; set; }

        /// <summary>
        /// Represents Date of creation
        /// </summary>
        /// <value></value>
        public string Date { get; set; }

    }
}


