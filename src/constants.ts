
export const connectionString = `
{
    "ConnectionStrings": {       
        "DefaultConnection": "Server=YOURSERVERNAME; Database=YOURDATABASENAME; Trusted_Connection=True; MultipleActiveResultSets=true"        
    } 
}
`

export const initCode = `dotnet new webapi --use-controllers -o <APINAME>
cd <APINAME>
dotnet add package FlashServer
code -r ../<APINAME>
`;

export const programCode = `
builder.Services.AddDbcontextFactory<YOURCONTEXT>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

Assembly assembly = Assembly.GetExecutingAssembly();

builder.Services.AddAutoMapper(assembly);
builder.Services.AddManipulationManagers(assembly);
`

export const ContextCode = `
public class YOURCONTEXT : BaseContext<YOURCONTEXT>
{
    public YOURCONTEXT(DbContextOptions<YOURCONTEXT> options) : base(options)
    {}
}

`

