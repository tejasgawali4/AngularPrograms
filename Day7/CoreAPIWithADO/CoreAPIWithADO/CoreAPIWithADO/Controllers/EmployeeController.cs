using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoreAPIWithADO.Model;
using CoreAPIWithADO.Repository;
using CoreAPIWithADO.Utility;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace CoreAPIWithADO.Controllers
{
    [Produces("application/json")]
    [Route("api/Employee")]
    //[ApiController]
    [EnableCors("AllowOrigin")]
    public class EmployeeController : ControllerBase
    {
        private readonly IOptions<MySettingsModel> appSettings;

        public EmployeeController(IOptions<MySettingsModel> app)
        {
            appSettings = app;
        }

        [HttpGet]
        [Route("GetAllEmployees")]
        public IActionResult GetAllEmployees()
        {
            var data = DbClientFactory<EmployeeDbClient>.Instance.GetAllEmployees(appSettings.Value.DbConn);
            return Ok(data);
        }

        [HttpPost]
        [Route("SaveEmployee")]
        public IActionResult SaveEmployee([FromBody]EmployeesModel model)
        {
            var msg = new Message<EmployeesModel>();
            var data = DbClientFactory<EmployeeDbClient>.Instance.SaveEmployee(model, appSettings.Value.DbConn);
            if (data == "C200")
            {
                msg.IsSuccess = true;
                if (model.Id == 0)
                    msg.ReturnMessage = "Employee saved successfully";
                else
                    msg.ReturnMessage = "Employee updated successfully";
            }
            else if (data == "C201")
            {
                msg.IsSuccess = false;
                msg.ReturnMessage = "Email Id already exists";
            }
            else if (data == "C202")
            {
                msg.IsSuccess = false;
                msg.ReturnMessage = "Mobile Number already exists";
            }
            return Ok(msg);
        }

        [HttpPost]
        [Route("DeleteEmployee")]
        public IActionResult DeleteEmployee([FromBody]EmployeesModel model)
        {
            var msg = new Message<EmployeesModel>();
            var data = DbClientFactory<EmployeeDbClient>.Instance.DeleteEmployee(model.Id, appSettings.Value.DbConn);
            if (data == "C200")
            {
                msg.IsSuccess = true;
                msg.ReturnMessage = "Employee Deleted";
            }
            else if (data == "C203")
            {
                msg.IsSuccess = false;
                msg.ReturnMessage = "Invalid record";
            }
            return Ok(msg);
        }
    }
}
