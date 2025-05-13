"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";

export function Input() {
  const [input, setInput] = useState("");
  const router = useRouter();

  function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (input === "") return;

    router.push(`/game/search/${input}`);
  }

  return (
    <form
      onSubmit={handleSearch}
      className="w-full bg-slate-200 my-5 flex gap-2 items-center justify-between rounded-lg p-2"
    >
      <input
        type="text"
        className="bg-slate-200 outline-none w-11/12"
        placeholder="Procurando algum jogo?..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="cursor-pointer hover:text-[#ea700cec] text-[#ea580c]"
        type="submit"
      >
        <FiSearch size={24} />
      </button>
    </form>
  );
}
