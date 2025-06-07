// Importa componentes da biblioteca React Native para estrutura visual e interação
import {
    ActivityIndicator, // Indicador de carregamento (spinner)
    Modal, // Componente de texto
    Pressable,
    SafeAreaView, // Garante que o conteúdo respeite áreas seguras (ex: notch)
    ScrollView, // Container genérico para layout
    StyleSheet, // Permite rolagem vertical do conteúdo
    Text, // Componente de modal (janela flutuante)
    View, // Container genérico para layout
} from 'react-native';

import { router } from 'expo-router';
// Importa o hook useState para controle de estado do componente
import { useState } from 'react';

// Importa o conteúdo reutilizável da modal (lista e texto)
// import DetalhesContent from '@/components/ui/DetalhesContent';

export default function Modulo2() {
    // Estado responsável por exibir ou esconder o modal
    const [modalVisible, setModalVisible] = useState(false);

    return (
        // Garante que o conteúdo da tela respeite as áreas seguras do dispositivo (notch, barra de status etc.)
        <SafeAreaView style={styles.container}>
            {/* Permite rolagem vertical caso o conteúdo ultrapasse a altura da tela */}
            <ScrollView contentContainerStyle={styles.content}>
                {/* Título principal da tela */}
                <Text style={styles.title}>Bem-vindo ao App do Módulo 2!</Text>

                {/* Botão que ativa a exibição do modal */}
                <Pressable onPress={() => setModalVisible(true)} style={styles.button}>
                    <Text style={styles.buttonText}>Abrir Detalhes no Modal</Text>
                </Pressable>

                {/* Botão que leva de volta para a Home */}
                <Pressable onPress={() => router.push('/')} style={styles.button}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Ir para Home</Text>
                </Pressable>

                {/* Modal exibido sobre o conteúdo principal */}
                <Modal visible={modalVisible} transparent animationType="slide">
                    {/* Fundo escurecido atrás da modal */}
                    <View style={styles.modalOverlay}>
                        {/* Área principal da modal */}
                        <View style={styles.modalContent}>

                            {/* Conteúdo detalhado da modal (lista, mensagem, etc.) */}
                            {/* TODO: 
                            <DetalhesContent /> 
                            */}

                            {/* Seção de botões de ação */}
                            <View style={styles.actions}>
                                {/* Botão que fecha o modal */}
                                <Pressable style={styles.close} onPress={() => setModalVisible(false)}>
                                    <Text style={{ color: 'white' }}>Fechar</Text>
                                </Pressable>

                                {/* Botão de confirmação */}
                                <Pressable style={styles.confirm} onPress={() => alert('Confirmado!')}>
                                    <Text style={{ color: 'white' }}>Confirmar</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>

                {/* Indicador de carregamento visual (rodando continuamente) */}
                <ActivityIndicator size="large" color="green" style={{ marginTop: 20 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    // Estilo base da tela, ocupa 100% da altura do dispositivo
    container: {
        flex: 1,
    },

    // Estilo do conteúdo dentro do ScrollView (aplica padding nas bordas internas)
    content: {
        padding: 20,
    },

    // Estilo do título principal da tela
    title: {
        fontSize: 24,           // Tamanho da fonte grande
        marginBottom: 20,       // Espaço abaixo do título
    },

    // Estilo do botão "Abrir Modal"
    button: {
        marginBottom: 20,       // Espaço abaixo do botão
        padding: 10,            // Espaçamento interno
        backgroundColor: '#0a5ca8', // Cor azul escura para o fundo do botão
        borderRadius: 6,        // Bordas arredondadas
        alignItems: 'center',   // Centraliza o texto horizontalmente dentro do botão
    },

    // Estilo do texto dentro do botão
    buttonText: {
        color: 'white',         // Cor branca para o texto
        fontWeight: 'bold',     // Texto em negrito
    },

    // Estilo do fundo escurecido por trás do modal
    modalOverlay: {
        flex: 1,                        // Ocupa toda a tela
        justifyContent: 'center',      // Centraliza verticalmente o conteúdo do modal
        alignItems: 'center',          // Centraliza horizontalmente
        backgroundColor: '#00000099',  // Fundo preto com opacidade (transparência)
    },

    // Estilo da caixa branca que aparece como conteúdo do modal
    modalContent: {
        backgroundColor: 'white',      // Fundo branco
        padding: 20,                   // Espaçamento interno
        borderRadius: 10,              // Bordas arredondadas
        width: '85%',                  // Ocupa 85% da largura da tela
    },

    // Estilo do container que envolve os dois botões (Confirmar e Fechar)
    actions: {
        flexDirection: 'row',          // Organiza os botões na horizontal
        justifyContent: 'space-around',// Deixa espaço igual entre os botões
        marginTop: 10,                 // Espaço acima dos botões
    },

    // Estilo do botão de confirmar
    confirm: {
        backgroundColor: 'green',      // Fundo verde
        padding: 10,                   // Espaçamento interno
        borderRadius: 5,               // Bordas arredondadas
    },

    // Estilo do botão de fechar
    close: {
        backgroundColor: 'red',        // Fundo vermelho
        padding: 10,                   // Espaçamento interno
        borderRadius: 5,               // Bordas arredondadas
    },
});