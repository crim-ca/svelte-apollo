<script context="module">
  import { gql } from 'apollo-boost';
  import { client, BOOKS, CHANGE_SUBS } from './data';

  export async function preload() {
    return {
      cache: await client.query({ query: BOOKS })
    };
  }
</script>
<script>
  import { getClient, restore, query, subscribe } from '../../';
  
  export let cache;
  restore(client, BOOKS, cache.data);

  const books = query(client, { query: BOOKS });
  const change = subscribe(client, { query: CHANGE_SUBS });
</script>

<ul>
  {#await $books}
    <li>Loading...</li>
  {:then result}
    {#each result.data.books as book (book.id)}
      <li>{book.title}</li>
    {:else}
      <li>No books found</li>
    {/each}
  {:catch error}
    <li>Error loading books: {error}</li>
  {/await}
</ul>

<section>
<h2>subscription</h2>
{#await $change}
awaiting change
{:then result}
received "{result.data.listen_change}"
{/await}
</section>
