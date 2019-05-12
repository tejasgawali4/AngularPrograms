using CoreAPIWithADO.Model;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using CoreAPIWithADO.Utility;

namespace CoreAPIWithADO.Translators
{
    public static class EmployeeTranslator
    {
        public static EmployeesModel TranslateAsEmployee(this SqlDataReader reader,
            bool isList = false)
        {
            if (!isList)
            {
                if (!reader.HasRows)
                    return null;
                reader.Read();
            }
            var item = new EmployeesModel();
            if (reader.IsColumnExists("Id"))
                item.Id = SqlHelper.GetNullableInt32(reader, "Id");

            if (reader.IsColumnExists("Name"))
                item.Name = SqlHelper.GetNullableString(reader, "Name");

            if (reader.IsColumnExists("EmailId"))
                item.EmailId = SqlHelper.GetNullableString(reader, "EmailId");

            if (reader.IsColumnExists("Address"))
                item.Address = SqlHelper.GetNullableString(reader, "Address");

            if (reader.IsColumnExists("Mobile"))
                item.Mobile = SqlHelper.GetNullableString(reader, "Mobile");

            if (reader.IsColumnExists("IsActive"))
                item.IsActive = SqlHelper.GetBoolean(reader, "IsActive");

            return item;
        }

        public static List<EmployeesModel> TranslateAsEmployeesList(this SqlDataReader reader)
        {
            var list = new List<EmployeesModel>();
            while (reader.Read())
            {
                list.Add(TranslateAsEmployee(reader, true));
            }
            return list;
        }
    }
}
