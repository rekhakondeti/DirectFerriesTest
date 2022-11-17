///<reference types='cypress'/>
import DealFinder from '../support/pages/dealFinder'
import HomePage from '../support/pages/HomePage'

// Used data fromt the fixture file example.json
const data = require('../fixtures/example.json')
const dealFinder = new DealFinder()
const homePage = new HomePage()

describe('Test Suite',()=>{
    const waitTime = 3000
    
    beforeEach('Land on the homepage and assert title',()=>{
        cy.clearCookies()
        cy.visit('/') //  Value comes from baseUrl
        homePage.closeButton().click()
        homePage.assertTitle(data.homePageTitle)//assert HomePage Title
    })
    it('Navigate to Special offers and change the language', ()=>{
        homePage.navBarMenu().click()
        homePage.navBarMenuExpanded('Special offers').click()
        
        // Select country to change the Language       
        homePage.selectLanguage(data.country).click({force:true})
        
        // asserting that the pageTitle is in French
        homePage.assertTitle(data.homePageTitleInFrench)
    })

    it('Dealfinder - Return Trip with default Values',()=>{
        cy.get('#dealfinder-wrapper section.journey_timing').should('have.length',2)
        dealFinder.selectFrom().type(data.fromItem)
        cy.contains('ul.routes li div.fromItem', data.fromItem).should('be.visible').click({force:true})        
        cy.contains('ul.routes li div.toItem', data.toItem).should('be.visible') 
        dealFinder.clickSearch().click()

    })

    it('Dealfinder - OneWay Trip with default values',()=>{
        dealFinder.oneWayJourneyTab().click()
        dealFinder.clickSearch().click({force:true})
        cy.wait(waitTime) 
    })
    
    it('Deal Finder End-to-End Scenario with specific selections', ()=>{             
        dealFinder.enterRoute().type(data.fromItem)
        cy.get('ul.routes li').should('have.length.gt',1)
        cy.contains('ul.routes li div.fromItem', data.fromItem).should('be.visible').click({force:true})        
        cy.contains('ul.routes li div.toItem', data.toItem).should('be.visible') 
        
        dealFinder.journeyOutbound().should('not.be.visible')
        dealFinder.journeyOutbound().click()
        
        dealFinder.submit().contains('Confirm Date').click()
        dealFinder.submit().contains('Confirm Time').click()
        dealFinder.clickAddTransportType().click()
        dealFinder.vehicleType().click()
        
        dealFinder.selectCarMake().contains(data.vehicleMake).click()
        dealFinder.selectCarModel().contains(data.vehicleModel).click()
        dealFinder.extraLuggage(data.extraLuggageOption).click()
        dealFinder.clickDone().click()

        dealFinder.clickSearch().click()

        cy.wait(waitTime)
        dealFinder.crumbTitle().should('be.visible')   
    })
    
})