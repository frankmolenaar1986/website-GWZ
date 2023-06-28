import React from 'react'
import banner from "../../../../public/banners/ouder-paar-met-rollator-in-paradepubliek.webp"
import ImageHeader from "../../components/ImageHeader"
import Image from 'next/image'

export default function About() {
    return (
        <>
            <ImageHeader banner={banner} headerTitle="Over ons" />

            <h1>Wie zijn wij</h1>

            <div className="float-right ml-6 text-center">
                <Image
                    src="/images/Mieke.webp"
                    width={500}
                    height={500}
                    alt="Mieke Verberg portret"
                />
                <caption className="text-xs w-full">Mieke Verberg</caption>
            </div>

            <p>GWZ wordt gevormd door Janet Riezebos en Mieke Verberg. Van huis uit fysiotherapeut, maatschappelijk werker en oefentherapeut. We hebben zelf in het verleden jarenlang ervaring opgedaan met de meerwaarde van het geïntegreerd samenwerken bij cliënten thuis. Vanuit deze gevoelde meerwaarde zijn we al meer dan vijftien jaar bezig om deze vorm van samenwerken uit te dragen bij verschillende organisaties.</p>


            <p>Voor ons is duidelijk dat samenwerken sowieso best lastig is en dat samenwerken in de 1e lijn nog meer uitdagingen kent. Maar áls de samenwerking werkt en goed loopt is het voor alle partijen een enorme meerwaarde. De kwaliteit van de zorg is beter, zowel cliënt als mantelzorg hebben er baat bij en het is ook voor de zorgmedewerkers zo veel leuker om op deze manier te werken. Daarom blijven we de uitdaging graag aangaan om samenwerking in de 1e lijn, via de GWZ-werkwijze, op zoveel mogelijk plekken te laten slagen.</p>

            <div className="float-right ml-6 text-center">
                <Image
                    src="/images/Janet.webp"
                    width={500}
                    height={500}
                    alt="Janet Riezenbos portret"
                />
                <caption className="text-xs w-full">Janet Riezenbos</caption>
            </div>
            <p>In Nederland is elke gemeente en elke wijk anders, met andere uitdagingen en kenmerken. Wilt u met ons vrijblijvend overleggen over wat er in uw wijk of gemeente mogelijk is op het gebied van multidisciplinair samenwerken? Neem contact met ons op. Wij denken graag met u mee!</p>

            <h2>Contactgegevens:</h2>
            <address>
                Mieke Verberg & Janet Riezebos <br />
                <a href="mailto:info@geintegreerdewijkzorg.nl">info@geintegreerdewijkzorg.nl</a><br />
                <a href="tel:+31613047843">+316 1304 7843</a>
            </address>


        </>
    )
}
