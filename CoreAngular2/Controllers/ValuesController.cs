using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace CoreAngular2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private List<ValuesPair> values;

        public ValuesController()
        {
            values = new List<ValuesPair>();
            values.Add(new ValuesPair() { Id = 11, Name = "ble ble" });
            values.Add(new ValuesPair() { Id = 12, Name = "boo boo" });
            values.Add(new ValuesPair() { Id = 13, Name = "bttt ble" });
        }

        // GET api/values
        [HttpGet]
        public ActionResult<List<ValuesPair>> Get()
        {
            return values;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<ValuesPair> Get(int id)
        {
            return values.Where(x => x.Id == id).Select(x => x).FirstOrDefault();
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }

    public class ValuesPair
    {
        public int Id;
        public string Name;
    }
}