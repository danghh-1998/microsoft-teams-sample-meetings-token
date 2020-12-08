namespace TokenApp.Models
{
    /// <summary>
    /// User information model.
    /// </summary>
    public class UserInfo
    {
        /// <summary>
        /// Gets or sets the Azure Active Directory Object Identifier.
        /// </summary>
        public string AadObjectId { get; set; }

        /// <summary>
        /// Gets or sets the name.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Gets or sets the email.
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// Gets or sets the user role.
        /// </summary>
        public UserRole Role { get; set; }

        /// <summary>
        /// Gets the deep copy of User Info.
        /// </summary>
        /// <returns>the user info instance.</returns>
        public UserInfo Clone()
        {
            return new UserInfo()
            {
                Email = this.Email,
                Name = this.Name,
                AadObjectId = this.AadObjectId,
                Role = this.Role,
            };
        }
    }
}