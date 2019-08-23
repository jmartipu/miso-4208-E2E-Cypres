describe('Los estudiantes Registro', function() {
    it('Visits los estudiantes and Register', function() {
        cy.visit('https://losestudiantes.co')
	cy.contains('Cerrar').click()

	cy.contains('Ingresar').click()
      	cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("prueba")
      	cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("exitosa")
      	cy.get('.cajaSignUp').find('input[name="correo"]').click().type("pruebaexitosa1@example.com")
      	cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select('Universidad de los Andes').should('have.value', 'universidad-de-los-andes')
	cy.get('.cajaSignUp').find('[type="checkbox"]').check()
      	cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('16')
      	cy.get('.cajaSignUp').find('input[name="password"]').click().type("PruebaExitosa.01")
	cy.get('.cajaSignUp').find('input[name="acepta"]').check()
      	cy.get('.cajaSignUp').contains('Registrarse').click()
      	cy.contains("Ya existe un usuario registrado con el correo 'pruebaexitosa1@example.com'").should('to.exist')
    })
})