import React from "react"

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css"

const QuestionsAccordion = () => {
  return (
    <Accordion
      style={{
        margin: "3vw 10vw",
        boxShadow: "0px 35px 77px -17px rgba(0, 0, 0, 0.44)",
      }}
    >
      <AccordionItem>
        <AccordionItemHeading className="font-weight-bold">
          <AccordionItemButton>Gdje se nalazite?</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>Nalazimo se u novnici, naselju istočno/sjeveroistočno Splita.</p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading className="font-weight-bold">
          <AccordionItemButton>
            Druge lokacija/putni troškovi?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Naravno! Uvijek nas vesele nove lokacije i gradovi. Puno putujemo i
            radimo gdje god nas pozovete. 60 km je u cijeni, ostatak se
            naplaćuje po cjeniku.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading className="font-weight-bold">
          <AccordionItemButton>
            Fotosession - prije ili poslije?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Fotosession prije ili poslije vjenčanja nam daje prostora da se
            upoznamo i budemo kreativni, ali možemo sve odraditi i na dan
            vjenčanja, što je odabir većine mladenaca.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading className="font-weight-bold">
          <AccordionItemButton>Obrada/rokovi isporuke?</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            300 – 800 editiranih fotki isporučujemo na USB sticku i online.
            Obrada fotografija, dizajn booka i kompleksnost izrade nalažu
            isporuku u roku 1,5 - 3 mjeseca. Puno pažnje posvećujemo obradi.
            Cilj nam je da ne zatome emociju, ali trudimo se da prate ideju i
            senzibilitet. Obrada daje jednu prepoznatljivu crtu u stilu svakog
            fotografa. U dizajnu se vodimo minimalizmom i odabiremo najljepše
            fotografije. Možete sugerirati izmjene, ali poštujte i naš kreativni
            izričaj!
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading className="font-weight-bold">
          <AccordionItemButton>
            Video, film montaža, koliko traje?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Snimamo i iz zraka, što videu daje dinamičnu i posebnu notu. Radimo
            ga u spotovima gdje se najbolje prikazuje, emocija, trenutak i
            dinamika. Ne pretjerujte na inzistiranju u trajanju videa već u
            gledljivosti i zanimljivosti. Isporuka na USB-u i putem web
            transfera.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading className="font-weight-bold">
          <AccordionItemButton>
            Upoznavanje prije vjenčanja?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Ako želite naravno, upoznavanjem osobno ili putem Skype-a ćemo
            stvoriti prisniji odnos prije Vašeg vjenčanja. Ukoliko ste na
            području Splita i okolice, možemo dogovoriti sastanak i u Splitu.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading className="font-weight-bold">
          <AccordionItemButton>
            Brošure, popusti, rezervacija?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Javite se! Popuste za vjenčanja odobravamo izvan sezone. Preferiramo
            telefonski poziv jer je međusobna konverzacija puno jasnija.
            Potpisivanjem ugovora i uplatom predujma, datum je bookiran. Osnovne
            cijene možete pronaći na stranici, a putem kontakt forme na stranici
            ili telefonski možete zatražiti proširenu brošuru s cijenama.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <style jsx>{`
        
      `}</style>
    </Accordion>
  )
}

export default QuestionsAccordion
