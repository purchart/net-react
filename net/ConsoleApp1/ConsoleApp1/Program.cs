Console.WriteLine("zadej jmeno: ");
string jmeno = Console.ReadLine();
Console.WriteLine("zadej prijmeni: ");
string prijmeni = Console.ReadLine();
Console.WriteLine("zadej vek: ");
string vek = Console.ReadLine();
Console.WriteLine(jmeno.ToUpper() + " " + prijmeni.ToUpper());
Console.WriteLine($"za rok ti bude {vek + 1}");