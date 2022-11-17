class DealFinder{
    enterRoute()
    {
        return cy.get('input#route_outbound')
    }
    journeyOutbound()
    {
        return cy.get('#dealfinder-wrapper .timing_outbound')
    }
    selectFrom()
    {
        return cy.get('input#route_outbound')
    }
    oneWayJourneyTab()
    {
        return cy.get("section label[for='journey_oneway']")
    }
    submit()
    {
        return cy.get('#deafinder-submit')
    }
    vehicleType()
    {
        return cy.get('#vehicle_type_2')
    }
    clickAddTransportType()
    {
        return cy.get('li a.vehicle.trip_outbound i#plus_icon')
    }
    selectCarMake()
    {
        return cy.get('fieldset.car_make_fields li').find('label')
    }
    selectCarModel()
    {
        return cy.get('fieldset ol.item_list.vehicle_model label')
    }
    extraLuggage(option)
    {
        return  cy.get(`[for="vehicle_extra_luggage_${option}"]`)
    }
    clickDone()
    {
        return cy.get('button.popup_done')
    }
    clickSearch()
    {
        return cy.get('#deafinder-submit').contains('Search')
    }
    crumbTitle()
    {
        return cy.get('.crumbTitle > :nth-child(2)')
    }
}
export default DealFinder