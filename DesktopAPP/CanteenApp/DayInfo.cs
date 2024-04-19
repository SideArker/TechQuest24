using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace CanteenApp
{
    public class DayInfo
    {
        public int Day { get; set; }
        public int Month { get; set; }
        public bool IsGiven { get; set; }
        public DateTime PurchaseDate { get; set; }
        public DateTime ReleaseDate { get; set; }
    }

    public class DaysSchema
    {
        public List<DayInfo> Days { get; set; }
    }

}
