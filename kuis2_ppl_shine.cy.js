describe('empty spec', () => {
  it('passes', () => {
    //mengakses halaman login website proyek pemesanan hotel
    cy.visit('http://localhost/Tugas_Besar_Hotel/login.php')

    //melakukan login
    cy.get('input[placeholder="Username"]').type('admin')
    cy.get('input[placeholder="Password"]').type('admin')
    cy.get('button[class="btn btn-primary btn-sm btn-block"]').click()

    //menuju menu data tamu
    cy.contains('Data Tamu').click()

    //Test Case 1: mengedit dan menyimpan data
    cy.contains('Edit').click()
    cy.get('input[name="username"]').clear()
    cy.get('input[name="username"]').type('raraw')
    cy.get('input[name="namauser"]').clear()
    cy.get('input[name="namauser"]').type('raraaaaa')
    cy.get('input[name="telepon"]').clear()
    cy.get('input[name="telepon"]').type('082331552132')
    cy.get('input[name="email"]').clear()
    cy.get('input[name="email"]').type('inirara@gmail.com')
    cy.contains('SIMPAN').click()

    //Test Case 2: menyimpan tanpa perubahan
    cy.contains('Edit').click()
    cy.contains('SIMPAN').click()

    //Test Case 3: menghapus data
    cy.contains('Hapus').click()

    //melakukan logout
    cy.contains('Logout').click()
  })
})