import { useState } from 'react'
import styles from './Form.module.css'

export default function Form() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        consent: false
    })

    const handleOnChange = (e) => {
        const {name, value, type, checked} = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked:value
        }))
    }

    const submit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('http://localhost:3001/contact', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(formData)
            })

            if(response.ok){
                alert('Mensagem enviada com sucesso!')
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                    consent: false
                })
            } else {
                alert('Erro ao enviar mensagem!')
            }
        } catch (error) {
            console.log("Erro: ", error);
            alert('Erro de conexão')
        }
    }

    return (
        <section className={styles.form_section}>
            <h2 className={styles.form_title}>Entre em contato</h2>
            <div className={styles.form_container}>
                <form className={styles.form} onSubmit={submit}>
                    <input 
                        name='name'
                        type='text' 
                        placeholder='Nome' 
                        required
                        value={formData.name}
                        onChange={handleOnChange}
                    />    
                    <input 
                        name='email'
                        type='email' 
                        placeholder='E-mail' 
                        required
                        value={formData.email}
                        onChange={handleOnChange}
                    />
                    <input 
                        name='phone'
                        type='tel' 
                        maxLength={14}
                        placeholder='Telefone' 
                        required
                        value={formData.phone}
                        onChange={handleOnChange}
                    />
                    <textarea 
                        name='message'
                        required 
                        placeholder='Deixei sua mensagem aqui...'
                        value={formData.message}    
                        onChange={handleOnChange}
                    />

                    <div className={styles.checkbox_container}>
                        <input 
                            name='consent'
                            type='checkbox' 
                            id='consent' 
                            required
                            checked={formData.consent}
                            onChange={handleOnChange}
                        />
                        <label htmlFor='consent'> 
                            Estou ciente de que ao enviar meus dados estou autorizando e consentindo com o tratamento dos meus dados pessoais como: nome completo e e-mail, telefone e etc, para finalidade exclusiva do instituto e suas atividades.
                        </label>
                    </div>

                    <button type='submit' className={styles.submit_button}>
                        Enviar mensagem
                    </button>
                </form>

                <div className={styles.map}>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3500.212941516804!2d-49.3790595!3d-28.6832761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95218289dcc4f0bd%3A0x34d48ba2a20e3375!2sR.%20L%C3%BAcia%20Milioli%2C%20211%20-%20Santa%20Barbara%2C%20Crici%C3%BAma%20-%20SC%2C%2088802-020!5e0!3m2!1spt-BR!2sbr!4v1745800685479!5m2!1spt-BR!2sbr" 
                        allowFullScreen="" 
                        title='map'
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </section>
    )
}