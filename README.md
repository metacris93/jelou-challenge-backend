## Sección de preguntas y respuestas
1) You're building a high-throughput API for a cryptocurrency trading
platform. For this platform, time is extremely important because
microseconds count when processing high-volume trade orders. For
communicating with the API, you want to choose the verb that is fastest
for read-only operations.
What verb should you choose for retrieving trade orders with the API
server?

SELECT ONLY ONE
a) GET

---

2) You work for a Customer Relationship Management CRM company. The
company's clients gain CRM access through a RESTful API. The CRM allows
clients to add contact information for customers, prospects, and related
persons (e.g., virtual assistants or marketing directors). You want to choose an
appropriate API request path so clients can easily retrieve information for a
single contact while also being flexible for future software changes.
Which of the following API paths should you use?

SELECT ONLY ONE
b) contacts/{contact_id}

---

3) You work for a large social media network, and you've been tasked witherror
handling for the API. You're trying to decide on an appropriate errorcode forChallenge 4
authentication failures based on non-existent users and incorrect passwords.
You want to balance security against brute force attacks with providing
descriptive and true error codes.

Which HTTP error code(s) should you use to keep the system secure and still
report that an error occurred?

SELECT ONLY ONE
a) 404 f the user doesn't exist, and 403 if the password is wrong.

---

4) You're writing documentation for requesting information about a given user in
your system. Your system uses UUIDS (universally unique identifiers) as user
identifiers. In your documentation, you want to show an example.
True or false: You should put a fake UUID into the example code (instead of just
the text "UUID") as a placeholder.

SELECT ONLY ONE
a) TRUE

---

5) You're building code to handle errors issued from a remote API server. The
response may or may not have an error.
How much work should your method, handleErrors(response), handle?

SELECT ONLY ONE
c) Check for the presence of an error. If it exists, set a class property to the error,
then throw an exception.

---

6) You have two classes: a database driver and an email driver. Both classes
need to set errors so that your front-end interface displays any errors that
transpire on your platform.
Which way should you implement this error handling?

SELECT ONLY ONE
c) Make a driver-based error provider to handle errors in all classes that can
issue errors.

---

7) You need to name the private method in your class that handles
loopingthrough eCommerce products to collect and parse data. That data gets
stored in an array and set as a class property.
Which of the following should you use to name your method?

SELECT ONLY ONE
b) loopProductsAndParse()

---

8) There are multiple places in your codebase that need to access the
database. To access the database, you need to supply credentials. You
want to balance security with useability.
What strategy should you use to store and access these credentials?

SELECT ONLY ONE
d) Put them in a .env file, load data from it into a configuration system, then
request the credentials from a database service provider.

---

Scenario Analysis
Question: Given a distributed system that experiences latencies and occasional
failures in one of its microservices, how would you optimize it?
Describe your approach to identifying the problem, possible solutions, and how
you would ensure high availability and resilience

Identificando el problema:
Si estamos experimentando problemas de latencia, comenzaría revisando las consultas con la base de datos.
Posibles soluciones:
* Podría darse el caso que exista algún query ineficiente que requiera optimización.
* Columnas que no están indexadas.
* Utilizar mecanismo de Cache para reducir las consultas a la base de datos.
* Devolver datos paginados.
* Utilizar mecanismo de réplica si la base de datos es "read-heavy".
* Establecer timeouts cuando se realicen consultas a la base.

Existe otro escenario donde solo existe una instancia de ese microservicio que presenta fallos, podemos hacer lo siguiente.
Posibles soluciones:
* Crear varias instancias de ese microservicio y utilizar un balanceador de carga para distribuir el tráfico hacia las demás instancias.
* Si este microservicio es consumido por otros microservicios, utilizaría el Patrón "Circuit Breaker" para evitar un fallo en cascada y problemas de timeout.
Es decir, si el microservicio está presentando fallas, abro el circuito para detener de forma temporal las consultas.
Cuando el microservicio se recupere cierro el circuito para aceptar consultas provenientes de otros microservicios.

Para asegurar la alta disponibilidad y resiliencia podemos hacer lo siguiente.
Posibles soluciones:
* Desplegar los microservicios en diferentes zonas o regiones.
* Utilizar mecanismos de "health check" para reiniciar o reemplazar aquellas instancias que presentan fallos.
* Instalar herramientas de monitoreo y sistema de alertas para detectar anomalías a tiempo y evitar que escale a mayores.
