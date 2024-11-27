﻿using AuthECAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;

namespace AuthECAPI.Controllers
{
    public static class AccountEndpoints
    {
        public static IEndpointRouteBuilder MapAccountEndpoints(this IEndpointRouteBuilder app)
        {
            app.MapGet("/UserProfile", GetUserProfile);
            return app;
        }

        [Authorize]
        private static async Task<IResult> GetUserProfile(ClaimsPrincipal user, UserManager<AppUser> userManager)
        {
            var userId = user.Claims.First(x => x.Type == "userId").Value;
            var userDetail = await userManager.FindByIdAsync(userId);
            return Results.Ok(new 
            { 
                email = userDetail?.Email,
                fullName = userDetail?.FullName,
            });
        }
    }
}
