import HrvatskaBettingHeader from "@/components/hrvatska-betting-header"
import HrvatskaBettingFooter from "@/components/hrvatska-betting-footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HrvatskaBettingHeader />

      <div className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
        <article className="bg-white shadow-sm border border-gray-200">
          <header className="text-center px-6 md:px-12 pt-12 pb-8 border-b-4 border-double border-gray-800">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3">
              Politika Privatnosti
            </h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
            <p className="text-gray-600 font-medium">
              Posljednje ažuriranje:{" "}
              {new Date().toLocaleDateString("hr-HR", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </header>

          <div className="px-6 md:px-12 py-10 space-y-10">
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-yellow-500">
                Naša Predanost Privatnosti
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                sportskokladenjehr.com tretira zaštitu vaše privatnosti s najvećom ozbiljnošću. Ova politika privatnosti
                detaljno objašnjava kako prikupljamo, koristimo, čuvamo i štitimo vaše osobne podatke kada koristite
                našu platformu.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Naša praksa upravljanja podacima u potpunosti je usklađena s Općom uredbom o zaštiti podataka (GDPR) i
                hrvatskim Zakonom o zaštiti osobnih podataka. Vaša privatnost nije kompromis - to je temelj našeg
                poslovanja.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-yellow-500">
                Koje Podatke Prikupljamo
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tijekom korištenja naše platforme možemo prikupiti sljedeće kategorije podataka:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
                <li>
                  <strong>Identifikacijski podaci:</strong> Ime, prezime, korisničko ime ili pseudonim koji odaberete
                  prilikom interakcije s platformom.
                </li>
                <li>
                  <strong>Kontakt informacije:</strong> Email adresa i opcionalno broj telefona za komunikaciju i
                  obavijesti.
                </li>
                <li>
                  <strong>Tehnički podaci:</strong> IP adresa, tip uređaja, operativni sustav, verzija preglednika i
                  podaci o mrežnoj vezi.
                </li>
                <li>
                  <strong>Podaci o korištenju:</strong> Stranice koje posjećujete, vrijeme provedeno na platformi,
                  klikovi i interakcije s sadržajem.
                </li>
                <li>
                  <strong>Preferencije:</strong> Vaši odabiri jezika, regije, postavki obavijesti i drugih
                  personalizacijskih opcija.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-yellow-500">
                Pravna Osnova za Obradu Podataka
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vaše osobne podatke obrađujemo isključivo na temelju sljedećih pravnih osnova:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
                <li>
                  <strong>Vaša privola:</strong> Kada ste nam dali izričitu dozvolu za obradu vaših podataka u određene
                  svrhe.
                </li>
                <li>
                  <strong>Izvršenje ugovora:</strong> Kada je obrada nužna za pružanje usluga koje ste zatražili.
                </li>
                <li>
                  <strong>Legitimni interes:</strong> Kada imamo opravdan poslovni razlog za obradu koji ne narušava
                  vaša prava.
                </li>
                <li>
                  <strong>Zakonska obveza:</strong> Kada moramo obraditi podatke kako bismo ispunili zakonske zahtjeve.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-yellow-500">
                Kako Koristimo Vaše Podatke
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Prikupljene podatke koristimo isključivo u sljedeće svrhe:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Pružanje i održavanje funkcionalnosti platforme</li>
                <li>Personalizacija sadržaja i preporuka prema vašim interesima</li>
                <li>Komunikacija s vama o ažuriranjima, novostima i relevantnim informacijama</li>
                <li>Analiza ponašanja korisnika radi poboljšanja kvalitete usluge</li>
                <li>Zaštita sigurnosti platforme i prevencija zloupotreba</li>
                <li>Ispunjavanje zakonskih i regulatornih obveza</li>
                <li>Rješavanje tehničkih problema i pružanje korisničke podrške</li>
              </ul>
            </section>

            <section className="bg-yellow-50 border-2 border-yellow-500 p-8 rounded">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Dijeljenje Podataka s Trećim Stranama
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                sportskokladenjehr.com ne prodaje vaše osobne podatke trećim stranama. Podatke dijelimo samo u sljedećim
                ograničenim okolnostima:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>S pružateljima usluga koji nam pomažu u radu platforme (hosting, analitika, sigurnost)</li>
                <li>Kada je to zakonski obvezno ili potrebno za zaštitu naših prava</li>
                <li>S vašom izričitom privolom za specifične svrhe</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Svi naši partneri su ugovorno obvezani štititi vaše podatke i koristiti ih samo u dogovorene svrhe.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-yellow-500">
                Sigurnost Vaših Podataka
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Implementirali smo višeslojne sigurnosne mjere za zaštitu vaših podataka:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>SSL/TLS enkripcija za sve prijenose podataka</li>
                <li>Redovite sigurnosne revizije i testiranja penetracije</li>
                <li>Ograničen pristup podacima samo ovlaštenom osoblju</li>
                <li>Automatsko praćenje i detekcija sumnjive aktivnosti</li>
                <li>Redovite sigurnosne kopije i planovi oporavka od katastrofe</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-yellow-500">
                Razdoblje Čuvanja Podataka
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Vaše osobne podatke čuvamo samo onoliko dugo koliko je potrebno za ispunjenje svrha za koje su
                prikupljeni ili kako to zahtijeva zakon. Kada podaci više nisu potrebni, sigurno ih brišemo ili
                anonimiziramo. Možete zatražiti brisanje svojih podataka u bilo kojem trenutku, osim ako postoji
                zakonska obveza njihovog čuvanja.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-yellow-500">
                Vaša Prava
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Prema GDPR-u i hrvatskom zakonodavstvu, imate sljedeća prava:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>
                  <strong>Pravo na pristup:</strong> Možete zatražiti kopiju svih podataka koje imamo o vama
                </li>
                <li>
                  <strong>Pravo na ispravak:</strong> Možete zatražiti ispravak netočnih ili nepotpunih podataka
                </li>
                <li>
                  <strong>Pravo na brisanje:</strong> Možete zatražiti brisanje vaših podataka ("pravo na zaborav")
                </li>
                <li>
                  <strong>Pravo na ograničenje obrade:</strong> Možete zatražiti privremeno ograničenje obrade
                </li>
                <li>
                  <strong>Pravo na prenosivost:</strong> Možete zatražiti prijenos podataka drugom pružatelju usluga
                </li>
                <li>
                  <strong>Pravo na prigovor:</strong> Možete prigovoriti obradi vaših podataka u određenim okolnostima
                </li>
                <li>
                  <strong>Pravo na povlačenje privole:</strong> Možete povući privolu u bilo kojem trenutku
                </li>
              </ul>
            </section>

            <section className="bg-yellow-50 border-2 border-yellow-500 p-8 rounded">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Međunarodni Prijenosi Podataka
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Neki od naših pružatelja usluga mogu biti smješteni izvan Europske unije. U takvim slučajevima
                osiguravamo da su implementirane odgovarajuće zaštitne mjere, poput standardnih ugovornih klauzula
                odobrenih od strane Europske komisije, kako bi vaši podaci bili zaštićeni na istoj razini kao u EU.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-yellow-500">
                Promjene Politike Privatnosti
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Ovu politiku privatnosti možemo povremeno ažurirati kako bismo odražavali promjene u našim praksama ili
                zakonskim zahtjevima. O značajnim promjenama obavijestit ćemo vas putem email-a ili istaknutom
                obavijesti na platformi. Preporučujemo redovito pregledavanje ove politike kako biste bili informirani o
                tome kako štitimo vaše podatke.
              </p>
            </section>

            <section className="bg-yellow-50 border-2 border-yellow-500 p-8 rounded">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Kontakt i Ostvarivanje Prava
              </h2>
              <p className="text-gray-700 font-medium mb-3">
                Za pitanja o ovoj politici privatnosti ili za ostvarivanje vaših prava, kontaktirajte našeg službenika
                za zaštitu podataka:
              </p>
              <p className="text-gray-900 font-semibold mb-2">
                <p
                  className="text-blue-600 hover:text-yellow-600 underline transition-colors"
                >
                  info@sportskokladenjehr.com
                </p>
              </p>
              <p className="text-gray-600 mt-3">
                Također imate pravo podnijeti pritužbu Agenciji za zaštitu osobnih podataka (AZOP) ako smatrate da smo
                prekršili vaša prava na zaštitu podataka.
              </p>
            </section>
          </div>
        </article>
      </div>

      <HrvatskaBettingFooter />
    </div>
  )
}
