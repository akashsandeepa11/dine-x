import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";

import {
  AuthErrorCodes,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebaseApp } from "../../firebase";
import { useDispatch } from "react-redux";
import { signIn } from "../store/reducers/AuthSlice";

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const auth = getAuth(firebaseApp);

  const handleSubmit = () => {
    setError("");
    let email = input.email.toLowerCase().trim();
    let password = input.password;

    // sign in user
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // console.log(userCredential.user);

        dispatch(signIn(userCredential.user.uid));
      })
      .catch((err) => {
        if (
          err.code === AuthErrorCodes.INVALID_PASSWORD ||
          err.code === AuthErrorCodes.USER_DELETED
        ) {
        } else {
          setError("The email address or password is incorrect");
        }
      });
  };

  const handleChange = (name, text) => {
    setInput((prevState) => ({
      ...prevState,
      [name]: text,
    }));
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center",
      }}
    >
      <StatusBar />
      <KeyboardAvoidingView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <Text style={{ color: "#003580", fontSize: 17, fontWeight: "bold" }}>
            Sign In
          </Text>
          <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "medium" }}>
            Sign In to Your Account
          </Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "medium", color: "gray" }}>
              Email
            </Text>

            <TextInput
              value={input.email}
              onChangeText={(text) => handleChange("email", text)}
              placeholder="enter your email"
              placeholderTextColor="black"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "gray",
                marginBottom: 7,
                width: 300,
                fontSize: 18,
              }}
            />
          </View>

          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "medium",
                color: "gray",
                marginTop: 15,
              }}
            >
              Password
            </Text>

            <TextInput
              value={input.password}
              onChangeText={(text) => handleChange("password", text)}
              placeholder="enter your Password"
              placeholderTextColor="black"
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "gray",
                marginBottom: 7,
                width: 300,
                fontSize: 18,
              }}
            />
          </View>
        </View>
        <View>
          {error ? <Text style={{ color: "red" }}>{error}</Text> : null}
        </View>

        <Pressable
          onPress={() => handleSubmit()}
          style={{
            width: 200,
            backgroundColor: "#003580",
            padding: 15,
            borderRadius: 7,
            marginTop: 50,
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Login
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Register")}
          style={{ marginTop: 5 }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 17 }}>
            Don't have an account? Sign Up
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;
