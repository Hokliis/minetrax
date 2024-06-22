<?php

namespace App\Jobs;

use App\Models\Server;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class DeleteServerJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(private Server $server)
    {
        $this->onQueue('longtask');
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $this->server->minecraftPlayerSessions()->delete();
        $this->server->minecraftPlayers()->delete();

        $this->server->serverLiveInfos()->delete();
        $this->server->serverWorlds()->delete();
        $this->server->serverChatlog()->delete();
        $this->server->serverConsolelog()->delete();

        ResyncPlayersTableJob::dispatchSync();

        $this->server->delete();
    }
}
