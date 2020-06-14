using Sheetal.WebAPI.App_Start;

namespace Sheetal.WebAPI.Logging
{
    public class LoggerFactory
    {
        private static ILogAdapter _logger;

        public static void InitializeLogFactory(ILogAdapter logger)
        {
            _logger = logger;
        }

        public static ILogAdapter GetLogger()
        {
            return _logger;
        }
    }
}