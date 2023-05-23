using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PrvniAplikace
{
    /// <summary>
    /// Trida reprezentuje zdravic, ktery slouzi ke zdraveni uzivatelu
    /// </summary>
    internal class Zdravic
    {
        /// <summary>
        /// text pozdravu
        /// </summary>
        public string text;
        /// <summary>
        /// pozdravi uzivatele textem pozdravu a jeho jmenem
        /// </summary>
        /// <param name="jmeno">Jmeno uzivatele</param>
        /// <returns>Text s pozdravem</returns>
        public string Pozdrav(string jmeno)
        {
            return string.Format("{0} {1}", text, jmeno);

        }
    }
}
