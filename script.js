
        function checkAnagram() {
            // Obtener las palabras ingresadas
            const word1 = document.getElementById("word1").value.trim();
            const word2 = document.getElementById("word2").value.trim();
            
            // Función para validar si la entrada es una palabra válida
            function isValidWord(str) {
                // Verificar si la cadena está vacía o contiene caracteres no alfabéticos
                return /^[a-zA-Z]+$/.test(str);
            }
            
            // Verificar si las entradas son válidas
            if (!isValidWord(word1) || !isValidWord(word2)) {
                document.getElementById("result").innerText = "Por favor, ingresa solo palabras sin números ni símbolos.";
                document.body.classList.remove("dark-mode");
                document.querySelector("button").classList.remove("dark-mode");
                document.querySelector("h1").classList.remove("dark-mode");
                document.querySelector("p").classList.remove("dark-mode");
                return;
            }

            // Función para verificar si son anagramas
            function isAnagram(str1, str2) {
                // Limpiar las palabras eliminando espacios y convirtiendo a minúsculas
                str1 = str1.toLowerCase();
                str2 = str2.toLowerCase();
                
                // Si las longitudes son diferentes, no son anagramas
                if (str1.length !== str2.length) return false;
                
                // Ordenar las letras y comparar
                return str1.split("").sort().join("") === str2.split("").sort().join("");
            }
            
            // Verificar si son anagramas y mostrar el resultado
            const result = isAnagram(word1, word2);
            if (result) {
                document.getElementById("result").innerText = "¡Son anagramas!";
                document.body.classList.add("dark-mode");
                document.querySelector("button").classList.add("dark-mode");
                document.querySelector("h1").classList.add("dark-mode");
                document.querySelector("p").classList.add("dark-mode");
            } else {
                document.getElementById("result").innerText = "No son anagramas.";
                document.body.classList.remove("dark-mode");
                document.querySelector("button").classList.remove("dark-mode");
                document.querySelector("h1").classList.remove("dark-mode");
                document.querySelector("p").classList.remove("dark-mode");
            }
        }