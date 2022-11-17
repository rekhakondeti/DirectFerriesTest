class HomePage
{
    closeButton()
    {
        return cy.get('#df_cc_close')
    }
    navBarMenu()
    {
        return cy.get('li.nav-item a#navbarDropdownMenu')
    }
    navBarMenuExpanded(menuItem)
    {
        return cy.get('ul#navbarDropdownMenuExpanded li').contains(menuItem)
    }
    selectLanguage(country)
    {
        return cy.get('li.lang').contains(country)
    }
    assertTitle(pageTitle)
    {
        return cy.title().should('include', pageTitle)
    }
}
export default HomePage