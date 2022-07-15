<div class="scrollable-container" ng-transclude=""> <div markdown="fileTab.file.challenge.instructions" multi-language="true" class="markdown collapsed"><h1>Robust server structure: Advanced tips</h1><h2>Instructions</h2><p>Your task is to extend this API server, which stores "Notes" to enhance the error reporting functionality and add a read-only <code>ratings</code> resource.</p>
<h2>Existing files</h2><p>Use the existing data files located in <code>src/data</code> for the responses. Feel free to add or remove data from the files as necessary, but keep the same shape of the data.</p>
<h2>Tasks</h2><p>You should modify this server to meet the following requirements:</p>
<ol>
<li><code>/notes/:noteId/ratings</code> returns all ratings for the note.</li>
<li><code>/notes/:noteId/ratings/:ratingId</code> returns the rating for the note with the specified rating ID, or <code>404</code> if the rating ID isn't associated with the note ID.</li>
<li><code>/ratings</code> returns all ratings.</li>
<li><code>/ratings/:ratingId</code> returns the rating the specified ID.</li>
<li>Remove duplicate code by passing data on the response where appropriate.</li>
<li>Return <code>405</code> and an error message for all the HTTP methods that aren't handled by the router.</li>
</ol>
</div> <score-card-instructions challenge="fileTab.file.challenge"><!----></score-card-instructions> </div>