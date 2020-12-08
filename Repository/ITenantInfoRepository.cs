

namespace TokenApp.Repository
{
    public interface ITenantInfoRepository
    {
        string GetServiceUrl(string tenantId);
        void SetServiceUrl(string tenantId, string serviceUrl);
    }
}