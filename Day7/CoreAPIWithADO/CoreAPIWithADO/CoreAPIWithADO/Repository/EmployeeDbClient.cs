using CoreAPIWithADO.Model;
using CoreAPIWithADO.Translators;
using CoreAPIWithADO.Utility;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace CoreAPIWithADO.Repository
{
    public class EmployeeDbClient
    {
        public List<EmployeesModel> GetAllEmployees(string connString)
        {
            return SqlHelper.ExtecuteProcedureReturnData<List<EmployeesModel>>(connString,
                "GetEmployees", r => r.TranslateAsEmployeesList());
        }

        public string SaveEmployee(EmployeesModel model, string connString)
        {
            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 20)
            {
                Direction = ParameterDirection.Output
            };
            SqlParameter[] param = {
                new SqlParameter("@Id",model.Id),
                new SqlParameter("@Name",model.Name),
                new SqlParameter("@EmailId",model.EmailId),
                new SqlParameter("@Mobile",model.Mobile),
                new SqlParameter("@Address",model.Address),
                outParam
            };
            SqlHelper.ExecuteProcedureReturnString(connString, "SaveEmployee", param);
            return (string)outParam.Value;
        }

        public string DeleteEmployee(int id, string connString)
        {
            var outParam = new SqlParameter("@ReturnCode", SqlDbType.NVarChar, 20)
            {
                Direction = ParameterDirection.Output
            };
            SqlParameter[] param = {
                new SqlParameter("@Id",id),
                outParam
            };
            SqlHelper.ExecuteProcedureReturnString(connString, "DeleteEmployee", param);
            return (string)outParam.Value;
        }
    }
}
