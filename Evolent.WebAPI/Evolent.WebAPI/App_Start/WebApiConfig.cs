using Sheetal.DataAccess.Infrastructure;
using Sheetal.DataAccess.Repositories;
using Sheetal.DataAccess.UnitOfWork;
using Sheetal.Services.Interface;
using Sheetal.Services.Component;
using System.Web.Http;
using Sheetal.WebAPI.Resolver;
using SimpleInjector;
using System.Web.Http.Cors;

namespace Sheetal.WebAPI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            var cors = new EnableCorsAttribute("*", "*", "*");// origins, headers, methods  
            config.EnableCors(cors);

            var container = new Container();

            container.Register<IContactRepository, ContactRepository>();
            container.Register<IConnectionFactory, ConnectionFactory>();
            container.Register<IUnitOfWork, UnitOfWork>();
            container.Register<IContact, Contact>();
            //container.Verify();
            config.DependencyResolver = new UnityResolver(container);
            


            // Web API configuration and services
            // Configure Web API to use only bearer token authentication.
            //config.SuppressDefaultHostAuthentication();
            //config.Filters.Add(new HostAuthenticationFilter(OAuthDefaults.AuthenticationType));

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
