import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';

import warningIcon from '../../assets/images/icons/warning.svg';
import './styles.css';

function TeacherForm() {

    const scheduleItems = [
        { weekday: 0, from: '8:00 AM', to: '4:00 PM' },
        { weekday: 0, from: '10:00 AM', to: '6:00 PM' }
    ];



    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quier dar aulas."
                description="primeiro passo é preencher esse formulário de inscrição"
            />
            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="WhatsApp" />
                    <Textarea name="bio" label="Biografia" />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Educação Física', label: 'Educação Física' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'História', label: 'História' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Química', label: 'Química' },
                        ]}
                    />
                    <Input name="cost" label="Custo da sua hora por aula" />
                </fieldset>

                <fieldset>
                    <legend>Horários disponíveis
                        <button type="button">
                            + Novo Horário
                        </button>
                    </legend>

                    {scheduleItems.map(scheduleItem => {
                        return (
                            <div className="schedule-item">
                                <Select
                                    name="week_day"
                                    label="Dia da semana"
                                    options={[
                                        { value: '0', label: 'domingo' },
                                        { value: '1', label: 'segunda-feira' },
                                        { value: '2', label: 'terça-feira' },
                                        { value: '3', label: 'quarta-feira' },
                                        { value: '4', label: 'quinta-feira' },
                                        { value: '5', label: 'sexta-feira' },
                                        { value: '6', label: 'sábado' },
                                    ]}
                                />
                                <Input name="from" label="Das" type="time" />
                                <Input name="to" label="Até" type="time" />
                            </div>
                        )
                    })}
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;