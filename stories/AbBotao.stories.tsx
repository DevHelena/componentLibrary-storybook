import React from "react";
import { AbBotao, AbBotaoProps } from '../src'
import { ComponentMeta, ComponentStory } from '@storybook/react'

// exporta um ComponentMeta de AbBotao
export default {
    title: 'Componentes/AbBotao',
    component: AbBotao
} as ComponentMeta<typeof AbBotao>

// cria um template que é um ComponentStory do AbBotao, retornando o botão renderizado de fato.
const Template: ComponentStory<typeof AbBotao> = (args) => <AbBotao {...args}/>

export const Primario = Template.bind({})

Primario.args = {
    texto: 'Ab Botão Primário',
    tipo: 'primario'
} as AbBotaoProps

export const Secundario = Template.bind({})

Secundario.args = {
    texto: 'Ab Botão Secundário',
    tipo: 'secundario'
} as AbBotaoProps