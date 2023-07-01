const BASE_URL = "https://jsonplaceholder.typicode.com/users"

export async function getAllEmployees() {
    const result = await fetch(BASE_URL, { method: "GET" });

    if (result.ok || result.status === 200) return await result.json();
    else throw new Error(result.statusText);
}

export async function getEmployeeById(id) {
    const result = await fetch(`${BASE_URL}/${id}`, {
        method: "GET"
    });

    if (result.ok || result.status === 200) return await result.json()
    else throw new Error(result.statusText);
}

export async function updateEmployeeById(id, data) {
    const result = fetch(`${BASE_URL}/${id}`, {
        header: { "Content-Type": "application/json" },
        method: "PUT",
        body: JSON.stringify(data)
    })

    if (result.ok || result.status === 200) return true;
    else throw new Error(result.statusText);

}

export async function createEmployee(data) {
    const result = fetch(BASE_URL, {
        header: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(data)
    })

    if (result.ok || result.status === 200) return true;
    else throw new Error(result.statusText);

}

export async function deleteEmployeeById(id) {
    const result = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    });

    if (result.ok || result.status === 200) return true;
    else throw new Error(result.statusText);
}

