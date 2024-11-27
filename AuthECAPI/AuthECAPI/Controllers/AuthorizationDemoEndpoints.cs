using Microsoft.AspNetCore.Authorization;

namespace AuthECAPI.Controllers
{
    public static class AuthorizationDemoEndpoints
    {
        public static IEndpointRouteBuilder MapAuthorizationDemoEndpoints(this IEndpointRouteBuilder app)
        {
            app.MapGet("/AdminOnly", AdminOnly);
            app.MapGet("/AdminOrTeacher", AdminOrTeacher);
            app.MapGet("/HasLibraryId", LibraryMemberOnly);
            app.MapGet("/FemaleOnly", FemaleOnly);
            app.MapGet("/Above21Only", Above21Only);
            app.MapGet("/FemaleTeacherOnly", FemaleTeacherOnly);
            app.MapGet("/FemaleAbove21Only", FemaleAbove21Only);
            return app;
        }

        [Authorize(Roles = "Admin")]
        private static string AdminOnly()
        {
            return "Admin Only";
        }

        [Authorize(Roles = "Admin,Teacher")]
        private static string AdminOrTeacher()
        {
            return "Admin Or Teahcer";
        }

        [Authorize(Policy = "HasLibraryId")]
        private static string LibraryMemberOnly()
        {
            return "Library Member Only";
        }

        [Authorize(Policy = "FemaleOnly")]
        private static string FemaleOnly()
        {
            return "Female Only";
        }

        [Authorize(Policy = "Above21Only")]
        private static string Above21Only()
        {
            return "Above 21 Only";
        }

        [Authorize(Roles = "Teacher", Policy = "FemaleOnly")]
        private static string FemaleTeacherOnly()
        {
            return "Female Teacher Only";
        }

        [Authorize(Policy = "FemaleOnly")]
        [Authorize(Policy = "Above21Only")]
        private static string FemaleAbove21Only()
        {
            return "Female Above 21 Only";
        }
    }
}
