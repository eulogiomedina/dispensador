import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [usuario, setUsuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmaContrasena, setConfirmarContrasena] = useState("");
  const [telefono, setTelefono] = useState("");

  // Función para manejar el registro
  const handleRegister = () => {
    console.log("Registro:", {
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      usuario,
      correo,
      contrasena,
      confirmaContrasena,
      telefono,
    });
  };

  // Función básica de navegación
  const navigateTo = (screen) => {
    console.log(`Navigating to ${screen}`);
    // Aquí deberías agregar la lógica de navegación real, usando por ejemplo React Navigation
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Registro</Text>
          {/* Nombre */}
          <Text style={styles.label}>Nombre</Text>
          <TextInput
            placeholder="Ingrese su Nombre"
            style={styles.input}
            onChangeText={setNombre}
            value={nombre}
          />
          {/* Apellido Paterno */}
          <Text style={styles.label}>Apellido Paterno</Text>
          <TextInput
            placeholder="Apellido paterno"
            style={styles.input}
            onChangeText={setApellidoPaterno}
            value={apellidoPaterno}
          />
          {/* Apellido Materno */}
          <Text style={styles.label}>Apellido Materno</Text>
          <TextInput
            placeholder="Apellido materno"
            style={styles.input}
            onChangeText={setApellidoMaterno}
            value={apellidoMaterno}
          />
          {/* Usuario */}
          <Text style={styles.label}>Usuario</Text>
          <TextInput
            placeholder="Usuario"
            style={styles.input}
            onChangeText={setUsuario}
            value={usuario}
          />
          {/* Correo */}
          <Text style={styles.label}>Correo</Text>
          <TextInput
            placeholder="Correo"
            style={styles.input}
            onChangeText={setCorreo}
            value={correo}
          />
          {/* Contraseña */}
          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            placeholder="Contraseña"
            style={styles.input}
            secureTextEntry
            onChangeText={setContrasena}
            value={contrasena}
          />
          {/* Confirmar Contraseña */}
          <Text style={styles.label}>Confirmar Contraseña</Text>
          <TextInput
            placeholder="Confirmar contraseña"
            style={styles.input}
            secureTextEntry
            onChangeText={setConfirmarContrasena}
            value={confirmaContrasena}
          />
          {/* Teléfono */}
          <Text style={styles.label}>Teléfono</Text>
          <TextInput
            placeholder="Teléfono"
            style={styles.input}
            keyboardType="phone-pad"
            onChangeText={setTelefono}
            value={telefono}
          />
          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleRegister}
          >
            <Text style={styles.registerButtonText}>¡Regístrate ahora!</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateTo("Login")}>
            <Text style={styles.loginButtonText}>¿Ya tengo Cuenta?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(5, 7, 12, 0.75)",
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: '90%', // Ajusta esto según necesites
    alignItems: 'stretch', // Asegura que los elementos hijos se estiren para llenar el contenedor
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    alignSelf: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#000",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: "#0CB7F2",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginButtonText: {
    color: "blue",
    textAlign: "center",
    marginTop: 10,
  },
});

export default Formulario;
