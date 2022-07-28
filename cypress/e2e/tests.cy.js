describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000', { timeout: 120000 })
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })

  it('can visit a pokemon page', function () {
    cy.visit('http://localhost:5000', { timeout: 120000 })
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})
